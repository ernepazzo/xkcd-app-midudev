import { Card, Container, Row, Text } from "@nextui-org/react";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>XKCD</title>
        <meta name="description" content="Descript XKCD" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <Card css={{ $$cardColor: "$colors$primary" }}>
            <Card.Body>
              <Row justify="center" align="center">
                <Text h6 size={15} color="white" css={{ m: 0 }}>
                  NextUI gives you the best developer experience with all the
                  features you need for building beautiful and modern websites
                  and applications.
                </Text>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </main>
    </div>
  );
}
