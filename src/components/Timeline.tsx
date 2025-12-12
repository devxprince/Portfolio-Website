import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
  <div className="items-container">
    <h1>Career History</h1>
    <VerticalTimeline>

      {/* 2025 - BSPHCL (latest on top) */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2025 - 2025"
        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
        icon={<FontAwesomeIcon icon={faBriefcase} />}
      >
        <h3 className="vertical-timeline-element-title">Database Intern – BSPHCL</h3>
        <h4 className="vertical-timeline-element-subtitle">Patna, Bihar</h4>
        <p>
          SQL Database Management, Schema Design, Stored Procedures & Triggers,
          ETL & Data Pipelines, Indexing & Performance Tuning, Backup & Recovery,
          Data Modeling, Reporting & Dashboards (Power BI / Excel), Data Security & Governance
        </p>
      </VerticalTimelineElement>

      {/* 2024 - Edunet */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2024 - 2024"
        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
        icon={<FontAwesomeIcon icon={faBriefcase} />}
      >
        <h3 className="vertical-timeline-element-title">Frontend Developer – Edunet</h3>
        <h4 className="vertical-timeline-element-subtitle">India</h4>
        <p>
          React-based UI Development, Responsive & Accessible Design, Component-driven Architecture,
          State Management, API Integration (REST), Performance Optimization, Cross-browser QA
        </p>
      </VerticalTimelineElement>

      {/* 2023 - Cisco */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023 - 2023"
        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
        icon={<FontAwesomeIcon icon={faBriefcase} />}
      >
        <h3 className="vertical-timeline-element-title">Intern – Cisco</h3>
        <h4 className="vertical-timeline-element-subtitle">Remote</h4>
        <p>
          Computer Fundamentals, Networking Basics (TCP/IP, Routing, Switching), OS Concepts,
          Troubleshooting, Hands-on Labs with Network Devices, Basic Scripting for Automation
        </p>
      </VerticalTimelineElement>

    </VerticalTimeline>
  </div>
</div>

  );
}

export default Timeline;