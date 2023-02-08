import { Button, Container, Stack } from 'react-bootstrap';
import { NAV_LINKS } from '../../utils/constants';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="homescreen">
      <Container fluid className="text-center align-items-center">
        <Stack gap={5}>
          <h1 className="display-1 fw-bold">Hire-a-Patient</h1>
          <p className="lead">
            Empowering dialysis patients, enriching the workforce
          </p>
        </Stack>
        <Button variant="primary" href={NAV_LINKS.JOBS}>
          Explore Jobs
        </Button>
      </Container>
    </div>
  );
}
