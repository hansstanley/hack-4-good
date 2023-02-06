import { useEffect } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useRouteError } from 'react-router-dom';
import { NAV_LINKS } from '../utils/constants';

export default function ErrorPage() {
	return (
		<Container className="d-flex mt-5 align-items-center justify-content-center">
			<Card>
				<Card.Body>
					<Card.Title>Oops!</Card.Title>
					<Card.Text>An unexpected error has occured.</Card.Text>
					<Button href={NAV_LINKS.HOME}>Return home</Button>
				</Card.Body>
			</Card>
		</Container>
	);
}