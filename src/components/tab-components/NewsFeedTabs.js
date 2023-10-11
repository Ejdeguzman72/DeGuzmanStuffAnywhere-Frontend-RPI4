import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TopHeadlinesNewsfeed from '../news-component/news-feeds/TopHeadlineNewsFeed';
import BusinessNewsfeed from '../news-component/news-feeds/BusinessNewsFeed';
import SportsNewsFeed from '../news-component/news-feeds/SportsNewsFeed';
import PoliticalNewsFeed from '../news-component/news-feeds/PoliticalNewsFeed';
import TechnologyNewsFeed from '../news-component/news-feeds/TechnologyNewsFeed';

function NewsfeedTabs() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="top-headlines" title="Top Headlines">
        <TopHeadlinesNewsfeed />
      </Tab>
      <Tab eventKey="business" title="Business">
        <BusinessNewsfeed />
      </Tab>
      <Tab eventKey="finance" title="Finance">
        <SportsNewsFeed />
      </Tab>
      <Tab eventKey="political" title="Political">
        <PoliticalNewsFeed />
      </Tab>
      <Tab eventKey="sports" title="Sports">
        <SportsNewsFeed />
      </Tab>
      <Tab eventKey="technology" title="Technology">
        <TechnologyNewsFeed />
      </Tab>
    </Tabs>
  );
}

export default NewsfeedTabs;