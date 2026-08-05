import Card from "../ui/card";

function DefaultCard() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          Default Card
        </Card.Title>

        <Card.Description>
          A simple reusable card component.
        </Card.Description>
      </Card.Header>

      <Card.Content>
        Card content goes here.
      </Card.Content>

      <Card.Footer>
        Footer
      </Card.Footer>
    </Card>
  );
}

export default DefaultCard;