import Card from "../ui/card";

function GradientCard() {
  return (
    <Card variant="gradient">
      <Card.Header>
        <Card.Title>
          Gradient Card
        </Card.Title>

        <Card.Description>
          A vibrant gradient card that instantly grabs attention.
        </Card.Description>
      </Card.Header>

      <Card.Content>
        Perfect for featured content, promotional banners, premium plans, or
        important announcements.
      </Card.Content>

      <Card.Footer>
        Footer
      </Card.Footer>
    </Card>
  );
}

export default GradientCard;