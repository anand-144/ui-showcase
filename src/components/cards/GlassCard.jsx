import Card from "../ui/card";

function GlassCard() {
  return (
    <Card variant="glass">
      <Card.Header>
        <Card.Title>
          Glass Card
        </Card.Title>

        <Card.Description>
          A modern glassmorphism card with a frosted blur effect.
        </Card.Description>
      </Card.Header>

      <Card.Content>
        Ideal for dashboards, hero sections, overlays, and premium user
        interfaces with a sleek translucent appearance.
      </Card.Content>

      <Card.Footer>
        Footer
      </Card.Footer>
    </Card>
  );
}

export default GlassCard;