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
        <TimelineContent color='white' fontWeight='500' fontFamily="poppins" padding="2" lineHeight="0.8" fontSize="200%">Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector sx={{ height: '4.8rem' }} s />
        </TimelineSeparator>
        <TimelineContent color='white' fontWeight='500' fontFamily="poppins" lineHeight="0.8" fontSize="200%">Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent color='white' fontWeight='500' fontFamily="poppins" lineHeight="0.8" fontSize="200%">Sleep</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}