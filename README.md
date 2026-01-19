Problem Statement: Local Worker & Vendor Connection App We developed a web application that connects local workers (job seekers) with vendors or employers (job posters). The aim is to provide a seamless platform for posting job vacancies and finding reliable workers or helpers for various tasks like plumbing, electrical work, etc.

Application Workflow

Step 1: Role Selection On the homepage, users are prompted to select a role:
Job Poster: A person or company with job vacancies.

Job Seeker: A worker looking for job opportunities.

Each role has a separate login page.

2.Job Poster Flow Login as Job Poster.
After logging in, a sidebar menu is displayed.

Navigate to the "Post My Job" page to create new job postings.

All posted jobs are stored and displayed in the "My Jobs" page for management.

We also added an additional feature: Helper Jobs (e.g., plumber, electrician).

These helper job details are submitted through the Helper form and stored in the Firebase database.

3.Job Seeker Flow Login as Job Seeker.
The system retrieves and displays job listings from the "My Jobs" page (posted by job posters).

Job seekers can filter jobs based on their qualifications and interests.

Once the job seeker registers for a job, the form data is sent to the job poster’s email ID using EmailJS.

A search bar is available to easily find jobs by keywords or company name.

Helper Dashboard In the Job Seeker’s dashboard, there’s a menu option for "Help".
Clicking it redirects users to the Helper Dashboard.

The data shown is fetched from helper job posts submitted by job posters.

4.Users can:

View vendors/helpers by nearest location using Google Maps API.

Book a vendor using a pre-pay method.

Rate and review the vendor based on the quality of their work.

5.Key Features Separate login for job posters and job seekers

Job posting and registration system with Firebase

Real-time database integration

Resume upload functionality

Email confirmation via EmailJS

Google Maps integration for location-based vendor discovery

Booking system with payment option

Rating and review system for service providers
6.Technologies Used

HTML, CSS
JavaScript
Firebase: - Firebase Realtime Database
Firebase Storage
