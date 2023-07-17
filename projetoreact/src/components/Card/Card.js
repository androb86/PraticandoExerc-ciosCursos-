import CardBS from 'react-bootstrap/Card';
export const Card = () => {
  return (
    <CardBS className="bg-dark text-white">
      <CardBS.Img src="holder.js/100px270" alt="Card image" />
      <CardBS.ImgOverlay>
        <CardBS.Title>Card title</CardBS.Title>
        <CardBS.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </CardBS.Text>
        <CardBS.Text>Last updated 3 mins ago</CardBS.Text>
      </CardBS.ImgOverlay>
    </CardBS>
  );

}