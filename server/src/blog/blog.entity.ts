import { Feed } from 'src/feed/feed.entity';
import { RssInformation } from 'src/rss/rss.entity';
import { Entity, OneToMany } from 'typeorm';

@Entity({
  name: 'blog',
})
export class Blog extends RssInformation {
  @OneToMany((type) => Feed, (feed) => feed.blog)
  feeds: Feed[];
}