import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { FaGraduationCap } from 'react-icons/fa';

const AttendanceCard = () => {
  return (
    <Card style={styles.cardContainer}>
      <Card.Body className="d-flex flex-column">
        {/* Top Section: Attendance Number and Dropdown */}
        <div style={styles.attendanceSection}>
          <div style={styles.attendanceNumber}>14393</div>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" style={styles.dropdown}>
              This Month
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Last Month</Dropdown.Item>
              <Dropdown.Item href="#/action-2">This Year</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* Bottom Section: Text Details and Icon */}
        <div style={styles.detailsSection}>
          <div style={styles.textSection}>
            <div style={styles.attendanceText}>Student Attendance</div>
            <div style={styles.totalText}>
              Total <span style={styles.totalNumber}>15000</span>
            </div>
          </div>
          <div style={styles.iconContainer}>
            <FaGraduationCap style={styles.icon} />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

const styles = {
  cardContainer: {
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f5f7fa',
    padding: '20px',
    width: '400px',
  },
  attendanceSection: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px', // Space between the number/dropdown and the details section
  },
  attendanceNumber: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#000',
    marginRight: '10px',
  },
  dropdown: {
    borderRadius: '5px',
    fontSize: '14px',
  },
  detailsSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textSection: {
    marginRight: '10px',
  },
  attendanceText: {
    fontSize: '16px',
    fontWeight: 'normal',
    color: '#606060',
  },
  totalText: {
    fontSize: '14px',
    color: '#606060',
  },
  totalNumber: {
    color: '#00cc44',
    fontWeight: 'bold',
  },
  iconContainer: {
    backgroundColor: '#eaf2ff',
    padding: '10px',
    borderRadius: '50%',
  },
  icon: {
    fontSize: '24px',
    color: '#4b8fe2',
  },
};

export default AttendanceCard;
