import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: null,
      title:
        "Death toll jumps to 14 in crash of Russian warplane in residential area that ignited massive blaze - CBS News",
      description:
        "A Su-34 bomber came down in the Russian port city of Yeysk after one of its engines caught fire during takeoff for a training mission, the Russian Defense Ministry said.",
      url: "https://www.cbsnews.com/news/russia-plane-crash-su-34-yeysk-higher-death-toll/",
      urlToImage:
        "https://assets2.cbsnewsstatic.com/hub/i/r/2022/10/17/79a40175-7c1f-4c1d-83a3-824a026fc4cf/thumbnail/1200x630g2/39ee941583cb52f72f3a0b7f457fc13c/russia-warplane-crash-ap22290681376198-edited.jpg",
      publishedAt: "2022-10-18T14:20:00Z",
      content:
        "A Russian warplane crashed Monday into a residential area in a Russian city on the Sea of Azov after suffering engine failure, leaving at least 14 people dead, three of whom jumped from upper floors … [+3014 chars]",
    },
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "",
      title:
        "2022-23 NBA regular season award predictions: Experts picks for MVP, Rookie of the Year, Most Improved Player - CBS Sports",
      description:
        "Will Nikola Jokic win his third straight MVP award or will Joel Embiid muscle him out?",
      url: "https://www.cbssports.com/nba/news/2022-23-nba-regular-season-award-predictions-experts-picks-for-mvp-rookie-of-the-year-most-improved-player/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2022/10/17/8ab01a6f-f067-41cb-912a-912491810698/thumbnail/1200x675/65150d21eb4a14d7285d72de18328a06/untitled-design-2022-10-17t102210-189.png",
      publishedAt: "2022-10-18T14:05:00Z",
      content:
        "NBA basketball is a team sport, but it's rare in that one individual can make an incredible difference. Aaron Judge can only come to the plate four or five times per game. Patrick Mahomes has nobody … [+3975 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Ukraine war: Energy situation 'critical' after Russian attacks - BBC",
      description:
        "The capital, Kyiv, and other cities are targeted, and officials say rolling power cuts are possible.",
      url: "https://www.bbc.com/news/world-europe-63297239",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/E794/production/_127248295_ukrainemissilestrikes_index1-reuters.jpg",
      publishedAt: "2022-10-18T13:56:20Z",
      content:
        "Russian forces have again targeted Ukraine's energy facilities, leaving part of Kyiv and other cities with no power and water.\r\nA presidential aide said the situation across Ukraine was now critical.… [+5366 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Megan Thomas",
      title:
        "Selma Blair departs 'Dancing with the Stars' over health concerns related to MS - CNN",
      description:
        'Selma Blair will not continue competing on this season of "Dancing with the Stars" due to health concerns, the actress said Monday night.',
      url: "https://www.cnn.com/2022/10/18/entertainment/selma-blair-dancing-with-the-stars/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/221018123556-selma-blair-101522.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-10-18T13:53:00Z",
      content:
        "Selma Blair will not continue competing on this season of Dancing with the Stars due to health concerns, the actress said Monday night. \r\nBlair, who first shared she was diagnosed with multiple scler… [+1995 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Exclusive: Iran agrees to ship missiles, more drones to Russia, defying the West - Reuters",
      description:
        "Iran has promised to provide Russia with surface to surface missiles, in addition to more drones, two senior Iranian officials and two Iranian diplomats told Reuters, a move that is likely to infuriate the United States and other Western powers.",
      url: "https://www.reuters.com/world/exclusive-iran-agrees-ship-missiles-more-drones-russia-defying-west-sources-2022-10-18/",
      urlToImage:
        "https://www.reuters.com/resizer/_u7bvnCgITA2u27NI8EO-ANnfNk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/USQYJCU2BJKDHFENQ5HZ4EATPY.jpg",
      publishedAt: "2022-10-18T13:41:00Z",
      content:
        "Oct 18 (Reuters) - Iran has promised to provide Russia with surface to surface missiles, in addition to more drones, two senior Iranian officials and two Iranian diplomats told Reuters, a move that i… [+5833 chars]",
    },
    {
      source: {
        id: null,
        name: "NBCSports.com",
      },
      author: "Mike Florio",
      title: "PFT’s Week 7 2022 NFL power rankings - NBC Sports",
      description:
        "1. Eagles (6-0; No. 1): It’s hard to find that first potential “L” for the best team in the league.2. Bills (5-1; No. 2): This year, they really need their regular-season win in K.C. to result in a rematch in Buffalo.3. Chiefs (4-2; No. 3): They’ll need to di…",
      url: "https://profootballtalk.nbcsports.com/2022/10/18/pfts-week-7-2022-nfl-power-rankings/",
      urlToImage:
        "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/10/GettyImages-1434200946-e1666099396931.jpg",
      publishedAt: "2022-10-18T13:24:00Z",
      content:
        "1. Eagles (6-0; No. 1): Its hard to find that first potential L for the best team in the league.\r\n2. Bills (5-1; No. 2): This year, they really need their regular-season win in K.C. to result in a re… [+2740 chars]",
    },
    {
      source: {
        id: "financial-times",
        name: "Financial Times",
      },
      author: "Joshua Franklin",
      title:
        "Goldman Sachs announces overhaul as quarterly profit slides - Financial Times",
      description:
        "Chief executive David Solomon pledges stronger focus on wealth management as quarterly profit slides",
      url: "https://www.ft.com/content/cac2059d-4ead-4415-a7ef-74cdfc3c13d2",
      urlToImage:
        "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F75f012b5-5981-4fd7-bccd-8e8fdffe6f7a.png?source=next-opengraph&fit=scale-down&width=900",
      publishedAt: "2022-10-18T13:19:43Z",
      content:
        "Goldman Sachs has revealed the details of its latest reorganisation under chief executive David Solomon, pulling back from its celebrated foray into retail banking to focus more on its traditional st… [+2739 chars]",
    },
    {
      source: {
        id: null,
        name: "WCVB Boston",
      },
      author: null,
      title:
        "Boston University calls Daily Mail report on COVID-19 research 'false, inaccurate' - WCVB Boston",
      description:
        "Leaders at the school's Emerging Infectious Diseases Laboratories said they have actually found the COVID-19 replicate to be less dangerous.",
      url: "https://www.wcvb.com/article/boston-university-calls-daily-mail-report-on-covid-19-research-false-inaccurate/41677875",
      urlToImage:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/bu-neidl-disease-lab-1533212549.jpg?crop=0.948xw:0.800xh;0.0114xw,0.200xh&resize=1200:*",
      publishedAt: "2022-10-18T13:08:00Z",
      content:
        "BOSTON —Boston University is responding to a report about COVID-19 research being done at the school.\r\nThe Daily Mail published an article Monday saying researchers at BU created a new and more deadl… [+1479 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Carolyn Y. Johnson",
      title:
        "A swarm of covid variants could fuel a winter surge - The Washington Post",
      description:
        "Multiple versions of the omicron variant, including XBB and BQ.1.1, threaten to knock out treatments and challenge vaccines this winter.",
      url: "https://www.washingtonpost.com/health/2022/10/18/covid-variants-xbb-bq1-bq11/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/KVQYQKOSJNZPTKS7DL42NBPQCQ.jpg&w=1440",
      publishedAt: "2022-10-18T13:00:00Z",
      content:
        "Comment on this story\r\nFor two years, coronavirus variants emerged, one by one, sweeping the globe.\r\nBut this fall and winter are expected to be different: Instead of a single ominous variant lurking… [+10543 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Hartley Charlton",
      title:
        "Apple Store Down Ahead of Rumored New iPad Pro Announcement - MacRumors",
      description:
        "Apple's online storefront has gone down ahead of the expected announcement of new iPad models via press release.   Upon the online store going...",
      url: "https://www.macrumors.com/2022/10/18/apple-store-down-ahead-of-rumored-new-ipad-pro/",
      urlToImage:
        "https://images.macrumors.com/t/cQKzQ7tidi2KjmvXKMKZvtTlF74=/1600x/article-new/2022/07/apple-store-down.jpg",
      publishedAt: "2022-10-18T12:06:33Z",
      content:
        "Apple's online storefront has gone down ahead of the expected announcement of new iPad models via press release.\r\nUpon the online store going down, Apple CEO Tim Cook seemingly tweeted a teaser for a… [+997 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Robyn A. Friedman",
      title:
        "Home Buyers Flock to Florida Cities Devastated by Hurricane Ian - The Wall Street Journal",
      description:
        "‘It’s pretty much business as usual,’ one agent says; area damaged by storm had experienced sharp price run-up",
      url: "https://www.wsj.com/articles/home-buyers-flock-to-florida-cities-devastated-by-hurricane-ian-11666047662",
      urlToImage: "https://images.wsj.net/im-645101/social",
      publishedAt: "2022-10-18T12:00:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Iranian female climber 'says hijab fell off accidentally' at competition - BBC",
      description:
        "A post on Elnaz Rekabi's Instagram tries to account for her breaking Iranian rules while competing.",
      url: "https://www.bbc.com/news/world-middle-east-63297219",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/A04A/production/_127243014_mediaitem127233369.jpg",
      publishedAt: "2022-10-18T11:59:05Z",
      content:
        'Media caption, Watch: Iran rock climber competes without hijab\r\nA female Iranian climber who competed with her hair uncovered did so because her hijab fell off "inadvertently", a post on her Instagra… [+3920 chars]',
    },
    {
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Lee Brown",
      title:
        "Kanye West claims ‘Jewish underground media mafia’ out to get him in Chris Cuomo interview - New York Post ",
      description:
        "Kanye West sparred on live TV with Chris Cuomo as the host ripped his “ugly,” “demonstrably false” and “inherently antisemitic” claim that an all-controlling &#8…",
      url: "https://nypost.com/2022/10/18/kanye-west-claims-a-jewish-media-mafia-is-out-to-get-him/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2022/10/cumo-kanye-comp.jpg?quality=75&strip=all&w=1024",
      publishedAt: "2022-10-18T11:59:00Z",
      content:
        "Kanye West sparred on live TV with Chris Cuomo as the host ripped his “ugly,” “demonstrably false” and “inherently anti-Semitic” claim that an all-controlling “Jewish underground media mafia” is out … [+4145 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "",
      title:
        "Abrams and Kemp face off in heated Georgia governor's debate - CNN",
      description:
        "Republican Gov. Brian Kemp and Democrat Stacey Abrams sparred over health care, crime and punishment and voting rights in a debate as they made their final appeal to voters in a reprise of their fiercely contested 2018 race for the same job. CNN national poli…",
      url: "https://www.cnn.com/videos/politics/2022/10/18/stacey-abrams-brian-kemp-georgia-debate-mckend-dnt-newday-vpx.cnn",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/221018073014-abrams-kemp-split-gov-debate-mckend-dnt-newday-vpx.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-10-18T11:57:53Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Page Six",
      },
      author: "Francesca Bacardi",
      title:
        "Meghan Markle: I was 'reduced to a bimbo' while on 'Deal or No Deal' - Page Six",
      description:
        "“I ended up quitting the show. I was so much more than what was being objectified on the stage,” the Duchess of Sussex said on this week’s “Archetypes.”",
      url: "https://pagesix.com/2022/10/18/meghan-markle-talks-quitting-deal-or-no-deal-briefcase-girl-job/",
      urlToImage:
        "https://pagesix.com/wp-content/uploads/sites/3/2022/10/meghan-markle-55.jpg?quality=75&strip=all&w=1200",
      publishedAt: "2022-10-18T11:53:00Z",
      content:
        "Meghan Markle quit her 2006 job as a briefcase girl on “Deal or No Deal” because she felt she was being “reduced to a bimbo.”\r\nThe Duchess of Sussex reflected on her brief stint on the game show, adm… [+2394 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Russell Wilson 'DOESN'T LOOK GOOD, I can tell you that!' - Keyshawn on the Broncos' MNF loss | KJM - ESPN",
      description:
        "Russell Wilson 'DOESN'T LOOK GOOD, I can tell you that!' 😯 - Keyshawn on the Broncos' MNF loss | KJMKeyshawn, JWill and Max recap the Los Angeles Chargers' ...",
      url: "https://www.youtube.com/watch?v=2lRpjgDKWl8",
      urlToImage: "https://i.ytimg.com/vi/2lRpjgDKWl8/maxresdefault.jpg",
      publishedAt: "2022-10-18T11:50:20Z",
      content: null,
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "Sabra Ayres, Hanna Arhirova",
      title:
        "Suicide drones strike fear in Ukraine's capital, killing 4 - The Associated Press",
      description:
        "KYIV, Ukraine (AP) — Waves of explosives-laden suicide drones struck Ukraine’s capital Monday, setting buildings ablaze, tearing a hole in one of them and sending people scurrying for cover or trying to shoot them down in what the president said was Russia’s …",
      url: "https://apnews.com/0cc944fef471a425a862728b3dd0d8bc",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/5d2548d8075f4befb023bcabcc4c680c/3000.jpeg",
      publishedAt: "2022-10-18T11:50:06Z",
      content:
        "KYIV, Ukraine (AP) Waves of explosives-laden suicide drones struck Ukraines capital Monday, setting buildings ablaze, tearing a hole in one of them and sending people scurrying for cover or trying to… [+7953 chars]",
    },
    {
      source: {
        id: "ign",
        name: "IGN",
      },
      author: "Ryan Dinsdale",
      title: "Microsoft Lays Off Hundreds of Staff - IGN - IGN",
      description:
        "Xbox creator Microsoft has laid off hundreds of staff members across multiple departments.",
      url: "https://www.ign.com/articles/microsoft-lays-off-hundreds-of-staff",
      urlToImage:
        "https://assets-prd.ignimgs.com/2022/06/14/micro-blogroll-logos-1655234296443.jpg?width=1280",
      publishedAt: "2022-10-18T11:29:02Z",
      content:
        "Xbox creator Microsoft has laid off hundreds of staff members across multiple departments.\r\nSources told Insider that less than 1,000 staff were laid off across divisions thought to include Xbox, the… [+2288 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Jack Stebbins",
      title:
        "Hasbro profit misses the mark as toy maker faces high inventory and inflation - CNBC",
      description:
        "Hasbro reported Q3 earnings that missed expectations and revenue that matched Wall Street projections.",
      url: "https://www.cnbc.com/2022/10/18/hasbro-has-reports-q3-earnings.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/105413171-1535044678729gettyimages-820990442.jpeg?v=1666089926&w=1920&h=1080",
      publishedAt: "2022-10-18T10:45:26Z",
      content:
        "Hasbro reported third-quarter earnings Tuesday morning that fell short of analysts' expectations as inflation weighed on consumers and the company contended with high levels of inventory.\r\nThe toy ma… [+2225 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Andrew Jeong, Leo Sands",
      title: "Russia-Ukraine war latest updates - The Washington Post",
      description:
        "A Russian fighter-bomber crash near Krasnodor killed 13 people. President Zelensky said 30 percent of Ukraine's power stations have been destroyed since Oct. 10.",
      url: "https://www.washingtonpost.com/world/2022/10/18/russia-ukraine-war-latest-updates/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3IMEVYQNKCVDMSNTSKQF2FIOFE.JPG&w=1440",
      publishedAt: "2022-10-18T10:30:56Z",
      content:
        "After a week of deadly strikes against civilians, Kyiv has accused Russias military of continuing attacks on its latest target: Ukraines energy infrastructure. Multiple facilities in the capital and … [+4928 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello I am  a constructor");
    this.state = {
      articles: this.articles,
      page: 1,
    };
  }

  async componentDidMount() {
    console.log("componentDidMount");
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=801688d7e7cb4aa2b0d2c8460c89ca19&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles , totalResults:parsedData.totalResults});
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=801688d7e7cb4aa2b0d2c8460c89ca19&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  handleNextClick = async () => {
if(this.state.page+1>Math.ceil(this.state.totalResults/20)){

}
else{


    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=801688d7e7cb4aa2b0d2c8460c89ca19&page=${
      this.state.page + 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
  }
  };

  render() {
    return (
      <div className="container my-3">
        <h2>MonkeyNews - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  class="newsitem"
                  title={element.title ? element.title.slice(0, 45) : ""}
                  discription={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
