import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function Roadmap() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector sx={{ height: '4.8rem' }} />
        </TimelineSeparator>
        <TimelineContent color='white' fontWeight='500' fontFamily="poppins" fontSize="100%">Community Building</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector sx={{ height: '4.8rem' }} s />
        </TimelineSeparator>
        <TimelineContent color='white' fontWeight='500' fontFamily="poppins"fontSize="100%">First NFT Launch</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent color='white' fontWeight='500' fontFamily="poppins" fontSize="100%">Launch Metaverse</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}