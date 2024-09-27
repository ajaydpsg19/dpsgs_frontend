import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { FaGraduationCap } from 'react-icons/fa';

const AttendanceCard = () => {
  return (
    <Card style={styles.cardContainer}>
      <Card.Body className="d-flex justify-content-between align-items-center">
        {/* Left Section: Number + Dropdown in one div */}
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex align-items-center mb-2">
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

          {/* Text Section below the number and dropdown */}
          <div>
            <div>
              <div style={styles.attendanceText}>Student Attendance</div>
              <div style={styles.totalText}>
                Total <span style={styles.totalNumber}>15000</span>
              </div>
            </div>
            <div style={styles.iconContainer}>
              <FaGraduationCap style={styles.icon} />
            </div>
          </div>
          {/* Icon Section */}
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
    width: '400px'
  },
  attendanceNumber: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#000',
    marginRight: '10px'
  },
  dropdown: {
    borderRadius: '5px',
    fontSize: '14px'
  },
  attendanceText: {
    fontSize: '16px',
    fontWeight: 'normal',
    color: '#606060'
  },
  totalText: {
    fontSize: '14px',
    color: '#606060'
  },
  totalNumber: {
    color: '#00cc44',
    fontWeight: 'bold'
  },
  iconContainer: {
    backgroundColor: '#eaf2ff',
    padding: '10px',
    borderRadius: '50%'
  },
  icon: {
    fontSize: '24px',
    color: '#4b8fe2'
  }
};

export default AttendanceCard;
