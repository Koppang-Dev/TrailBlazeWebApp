"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import PlanDeleteModal from "./PlanDeleteModal";

const PlanItem = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleOpenDeleteModal = () => setIsDeleteModalOpen(true);
  const handleCloseDeleteModal = () => setIsDeleteModalOpen(false);

  return (
    <>
      <PlanDeleteModal
        show={isDeleteModalOpen}
        hide={handleCloseDeleteModal}
        planID=""
      />
      <Card className="mb-3 rounded-5 mx-12">
        <Row className="g-0">
          {/* Image on the left side */}
          <Col md={2} className="d-flex justify-content-center">
            <Image
              width="200"
              height="200"
              src="/images/broken-image.png"
              className="img-fluid h-100 rounded"
              alt="Card image"
            />
          </Col>

          {/* Title and description */}
          <Col md={8}>
            <Card.Body>
              <Card.Title>Plan #</Card.Title>
              <Card.Text className="text-secondary">
                This is a short description inside the card to explain its
                contents.
                <br />
                This is a short description inside the card to explain its
                contents.
              </Card.Text>
            </Card.Body>
          </Col>

          {/* Edit and Delete icons */}
          <Col
            md={2}
            className="d-flex justify-content-end align-items-start py-2 pr-6"
          >
            <div>
              <Button variant="outline-none" size="sm" className="me-2">
                <i className="bi bi-pencil"></i>
              </Button>
              <Button
                variant="outline-none"
                size="sm"
                onClick={handleOpenDeleteModal}
              >
                <i className="bi bi-trash"></i>
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default PlanItem;