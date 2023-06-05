import { Row, Col, Container, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
export default function ExistingProfiles(){
	const [profiles, setProfiles] = useState([]);
	const [error, setError] = useState(null);
	useEffect(()=>{
		fetch('http://localhost:5000/api/v1/profile', {
			method:'GET',
			headers:{
				'content-type':'application/json'
			}
		})
		.then(res=>res.json())
		.then(data=>setProfiles(data.profiles))
		.catch(err=>setError(true))
	}, []);
	return (
		<Container fluid>
			{profiles.map(profile=>{
				return (
					<Row>
						<Col>
							<Button variant='outline-dark'>{profile}</Button>
						</Col>
					</Row>)
			})}
		</Container>
		)
}