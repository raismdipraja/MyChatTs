import { memo } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const NotFoundContainer = memo(() => {
  const navigate = useNavigate();

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
    >
      <Row className="text-center">
        <Col>
          <Card className="shadow-lg border-0 p-4" style={{ maxWidth: "500px", margin: "auto" }}>
            <Card.Body>
              <h1 className="display-3 text-primary">404</h1>
              <h4 className="mb-3 text-dark">Oops! Halaman tidak ditemukan</h4>
              <p className="text-muted mb-4">
                Maaf, halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau tidak ada.
              </p>
              <Button variant="primary" onClick={() => navigate("/")}>
                Kembali ke Beranda
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
});
