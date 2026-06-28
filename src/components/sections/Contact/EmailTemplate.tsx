import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface Props {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function EmailTemplate({
  name,
  email,
  subject,
  message,
}: Props) {
  return (
    <Html>
      <Head />

      <Preview>New Portfolio Contact Request</Preview>

      <Body
        style={{
          backgroundColor: "#f4f4f5",
          fontFamily: "Inter,Segoe UI,Helvetica,Arial,sans-serif",
          padding: "40px 0",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            padding: "40px",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <Heading
            style={{
              fontSize: "28px",
              marginBottom: "30px",
            }}
          >
            🚀 New Portfolio Inquiry
          </Heading>

          <Section>
            <Text>
              <strong>Name</strong>
            </Text>

            <Text>{name}</Text>
          </Section>

          <Section>
            <Text>
              <strong>Email</strong>
            </Text>

            <Text>{email}</Text>
          </Section>

          <Section>
            <Text>
              <strong>Subject</strong>
            </Text>

            <Text>{subject}</Text>
          </Section>

          <Section>
            <Text>
              <strong>Message</strong>
            </Text>

            <Text
              style={{
                whiteSpace: "pre-wrap",
              }}
            >
              {message}
            </Text>
          </Section>

          <Section
            style={{
              marginTop: "40px",
              borderTop: "1px solid #e4e4e7",
              paddingTop: "20px",
            }}
          >
            <Text
              style={{
                color: "#71717a",
                fontSize: "13px",
              }}
            >
              Sent from vkoushik.com
            </Text>

            <Text
              style={{
                color: "#71717a",
                fontSize: "13px",
              }}
            >
              {new Date().toLocaleString()}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
