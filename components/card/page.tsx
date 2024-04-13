import { Card, Text, Image, Badge, Group, Button } from "@mantine/core";
import * as React from "react";

interface NewsItemProps {
  imageUrl: string;
  title: string;
  content: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ imageUrl, title, content }) => (
  <div className="flex flex-col justify-center shadow-sm max-md:max-w-full">
    <article className="flex flex-col pb-5 bg-white max-md:max-w-full">
      <img src={imageUrl} alt={title} className="w-full aspect-[3.45] max-md:max-w-full" />
      <div className="flex flex-col px-6 mt-4 max-md:px-5 max-md:max-w-full">
        <h2 className="text-2xl max-md:max-w-full">{title}</h2>
        <p className="mt-5 max-md:max-w-full">
          {content}..........อ่านเพิ่มเติม
        </p>
        <button className="justify-center self-start px-14 py-3 mt-6 text-center bg-white rounded-3xl border border-black border-solid shadow-sm max-md:px-5">
          อ่านต่อ &gt;&gt;
        </button>
      </div>
    </article>
  </div>
);

interface TopNewsItemProps {
  title: string;
}

const TopNewsItem: React.FC<TopNewsItemProps> = ({ title }) => (
  <div className="flex flex-col justify-center w-full rounded-3xl bg-neutral-400">
    <div className="p-5 bg-white rounded-3xl">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
          <div className="shrink-0 mx-auto rounded-full bg-neutral-400 h-[60px] w-[60px] max-md:mt-10" />
        </div>
        <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
          <h3 className="text-4xl font-medium text-black max-md:mt-10">{title}</h3>
        </div>
      </div>
    </div>
  </div>
);

const newsItems = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/65c0a1d66d0fc9e616a24ce6df288732a6e8f4c9ef39c6dc5db93f02e154172c?apiKey=2f88df525aa24b2199d166d33fbe7f80&",
    title: "Header",
    content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/65c0a1d66d0fc9e616a24ce6df288732a6e8f4c9ef39c6dc5db93f02e154172c?apiKey=2f88df525aa24b2199d166d33fbe7f80&",
    title: "Header",
    content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/65c0a1d66d0fc9e616a24ce6df288732a6e8f4c9ef39c6dc5db93f02e154172c?apiKey=2f88df525aa24b2199d166d33fbe7f80&",
    title: "Header",
    content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
  },
];

const topNewsItems = Array(10).fill("ชื่อข่าว");

function MyComponent() {
  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section component="a" href="https://mantine.dev/">
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes with tours and
          activities on and around the fjords of Norway
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Book classic tour now
        </Button>
      </Card>
    </>
  );
}

export default MyComponent;