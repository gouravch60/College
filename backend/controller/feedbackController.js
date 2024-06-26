const Feedback = require('../model/feedbackModel');
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
exports.createFeedback = catchAsyncErrors(async (req,res)=>{
    let feedback = await Feedback.create(req.body);

    res.status(200).json({
        success:true,
        feedback
    })
})

exports.getAllFeedback=catchAsyncErrors(async (req,res)=>{

    let queryStr={...req.query};
    let enquiries;
    if(req.query.limit){
        let removeFields=['limit','skip'];
        removeFields.forEach((key)=>(delete queryStr[key]))
        let skip=req.query.skip||0;
        feedbacks=await Feedback.find(queryStr).skip(skip).limit(req.query.limit);
    }else{
        feedbacks=await Feedback.find(queryStr);
    }
    res.status(200).send({
        success:true,
        feedbacks
    });
});

exports.getFeedbackDatewise=catchAsyncErrors(async (req,res)=>{

    // Get the current year
    const currentYear = new Date().getFullYear();

    // Array of month numbers from 1 (January) to 12 (December)
    const months = [...Array(12).keys()].map(month => month + 1);
    
    // Array of three-letter month abbreviations
    const monthAbbreviations = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


    let counts = await Feedback.aggregate([
        {
            $match: {
                createdAt: {
                    $gte: new Date(currentYear, 0, 1), // Start of current year
                    $lt: new Date(currentYear + 1, 0, 1) // Start of next year
                }
            }
        },
        {
            $group: {
                _id: {
                    year: { $year: "$createdAt" },
                    month: { $month: "$createdAt" }
                },
                count: { $sum: 1 } // Count documents in each month
            }
        },
        {
            $project: {
                _id: 0,
                year: "$_id.year",
                month: "$_id.month",
                count: 1
            }
        },
        {
            $sort: {
                year: 1,
                month: 1
            }
        },
        {
            $group: {
                _id: "$year",
                data: {
                    $push: {
                        month: "$month",
                        count: "$count"
                    }
                }
            }
        },
        {
            $project: {
                _id: 0,
                year: "$_id",
                data: {
                    $map: {
                        input: months,
                        as: "month",
                        in: {
                            month: "$$month",
                            count: {
                                $cond: [{ $in: ["$$month", "$data.month"] }, { $arrayElemAt: ["$data.count", { $indexOfArray: ["$data.month", "$$month"] }] }, 0]
                            }
                        }
                    }
                }
            }
        }
    ]);

    let feedbackCount=counts[0].data.map(item=>({
        month:monthAbbreviations[item.month-1]
        ,count:item.count
    }));
    res.status(200).send({
        success:true,
        feedbackCount
    });
  
});