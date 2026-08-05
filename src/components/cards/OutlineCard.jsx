import Card from "../ui/card";

function OutlineCard() {
  return (
    <Card variant="outline">
      <Card.Header>
        <Card.Title>
          Outline Card
        </Card.Title>

        <Card.Description>
          A bordered card with a clean and minimal appearance.
        </Card.Description>
      </Card.Header>

      <Card.Content>
        Perfect for dashboards, forms, settings pages, and lightweight layouts.
      </Card.Content>

      <Card.Footer>
        Footer
      </Card.Footer>
    </Card>
  );
}

export default OutlineCard;