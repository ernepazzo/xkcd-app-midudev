import Head from "next/head";
import Header from "components/Header";
import Image from "next/image";
import { readdir, readFile, stat } from "fs/promises";
import Link from "next/link";
import { basename } from "path";

export default function Comic({
  id,
  img,
  alt,
  title,
  width,
  height,
  prevId,
  nextId,
  hasPrevious,
  hasNext,
}) {
  // eslint-disable-next-line react/no-unknown-property
  return (
    <>
      <Head>
        <title>XKCD - Comics for developers</title>
        <meta name="description" content="Comics for developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section className="max-w-lg m-auto">
          <h1 className="font-bold text-xl text-center mb-4">{title}</h1>
          <div className="max-w-xs m-auto mb-4">
            <Image
              layout="responsive"
              width={width}
              height={height}
              src={img}
              alt={alt}
            />
          </div>
          <p>{alt}</p>
          {/* Create pagination with nextId and prevId if available */}
          <div className="flex justify-between mt-4 font-bold ">
            {hasPrevious && (
              <Link href={`/comic/${prevId}`}>
                <a className="text-gray-600">⬅ Previous</a>
              </Link>
            )}

            {hasNext && (
              <Link href={`/comic/${nextId}`}>
                <a className="text-gray-600">Next ➡</a>
              </Link>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const files = await readdir("./comics");

  const paths = files.map((file) => {
    const id = basename(file, ".json");
    return { params: { id } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const content = await readFile(`./comics/${id}.json`, "utf8");
  const comic = JSON.parse(content);

  const idNumber = +id;
  const prevId = idNumber - 1;
  const nextId = idNumber + 1;

  const [prevResult, nextResult] = await Promise.allSettled([
    stat(`./comics/${prevId}.json`),
    stat(`./comics/${nextId}.json`),
  ]);

  const hasPrevious = prevResult.status === "fulfilled";
  const hasNext = nextResult.status === "fulfilled";

  return {
    props: {
      ...comic,
      hasPrevious,
      hasNext,
      prevId,
      nextId,
    },
  };
}
