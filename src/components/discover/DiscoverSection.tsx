import React from 'react';
import Section from '../Section';
import Container from '../Container';
import DiscoverHeading from './DiscoverHeading';
import DiscoverActions from './DiscoverActions';

export default function DiscoverSection() {
  return (
    <Section id="discover" size="lg" background="white">
      <Container size="default">
        <div className="py-12 md:py-24">
          <DiscoverHeading />
          <DiscoverActions />
        </div>
      </Container>
    </Section>
  );
}