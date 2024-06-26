import { Container, Row, Col, Card } from 'react-bootstrap';
import PageHero from "../layout/header/pageHero";

const AboutUs = () => {
  return (
    <div>
      <div className="pageHeroDiv">
        <PageHero title="About Us" image="/1.jpg" />
      </div>

      <Container className="py-5">
        <Row>
          <Col md={6}>
            <h2 className="mb-4">Our College Journey</h2>
            <p>  
                Welcome to Indian College, where every student's journey is nurtured, celebrated, and empowered. Situated in the heart of Durgapur, our institution is more than just a place of learning—it's a vibrant community where students from all walks of life come together to embark on a transformative educational experience.
            </p>
            <p>
            At Indian College, we pride ourselves on our commitment to academic excellence, innovation, and inclusivity. Our rigorous curriculum, taught by esteemed faculty members, challenges students to think critically, explore new ideas, and push the boundaries of knowledge. Through hands-on learning experiences, research opportunities, and interdisciplinary collaboration, students are prepared not only for their chosen careers but also for leadership roles in an increasingly complex and interconnected world.
            </p>
          </Col>

          <Col md={6}>
            <img
              src="/college_pic.jpg" // Replace with your college image
              alt="College Building"
              className="img-fluid rounded"
            />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <h2 className="mb-4">Our Team</h2>
          </Col>
        </Row>

        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                src="/director.jpg" // Replace with team member image
                alt="Team Member"
                height={'300px'}
              />
              <Card.Body>
                <Card.Title>Sanjay Diwedi</Card.Title>
                <Card.Text>Director</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                src="/principle.jpg" // Replace with team member image
                alt="Team Member"
                height={'300px'}
              />
              <Card.Body>
                <Card.Title>Sunita Mishra</Card.Title>
                <Card.Text>Principle</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                src="/trustee.jpg" // Replace with team member image
                alt="Team Member"
                height={'300px'}
              />
              <Card.Body>
                <Card.Title>Laxmi Awasthi</Card.Title>
                <Card.Text>Trustee</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;