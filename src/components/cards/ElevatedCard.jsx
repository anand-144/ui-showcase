import Card from "../ui/card";

function ElevatedCard() {
  return (
    <Card variant="elevated">
      <Card.Header>
        <Card.Title>
          Elevated Card
        </Card.Title>

        <Card.Description>
          A card with enhanced elevation and shadow for better visual hierarchy.
        </Card.Description>
      </Card.Header>

      <Card.Content>
        Ideal for highlighting featured content, statistics, or important sections
        in modern interfaces.
      </Card.Content>

      <Card.Footer>
        Footer
      </Card.Footer>
    </Card>
  );
}

export default ElevatedCard;