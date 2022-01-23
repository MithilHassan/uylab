import { Section, AdmitForm } from "../components/Styles/Styles";
const AdmissionForm = () => {
  return (
    <Section>
      <AdmitForm action="">
        <div>
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" placeholder="Name" required />
        </div>
        <div>
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" placeholder="Email Address" required />
        </div>
        <div>
          <label htmlFor="facebook">Facebook ID </label>
          <input type="text" id="facebook" placeholder="Facebook ID" />
        </div>
        <div>
          <label htmlFor="father">Father Name *</label>
          <input type="text" id="father" placeholder="Father Name" required />
        </div>
        <div>
          <label htmlFor="mother">Mother Name *</label>
          <input type="text" id="mother" placeholder="Mother Name" required />
        </div>
        <div className="flex">
          <p>Identification Type</p>
          <div>
            <input type="radio" name="identification_type" id="nid" />
            <label htmlFor="nid">NID No.</label>
          </div>
          <div>
            <input type="radio" name="identification_type" id="birth" />
            <label htmlFor="birth">Birth Certificate</label>
          </div>
          <div>
            <input type="radio" name="identification_type" id="passport" />
            <label htmlFor="passport">Passport</label>
          </div>
        </div>
        <div>
          <label htmlFor="identification">Identification No</label>
          <input
            type="text"
            id="identification"
            placeholder="Identification No"
          />
        </div>
        <div>
          <label htmlFor="present">Present Address *</label>
          <input
            type="text"
            id="present"
            placeholder="Present Address"
            required
          />
        </div>
        <div>
          <label htmlFor="permanent">Permanent Address</label>
          <input type="text" id="permanent" placeholder="Permanent Address" />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth *</label>
          <input type="date" id="dob" required />
        </div>
        <div>
          <label htmlFor="blood">Blood Group</label>
          <input type="text" id="blood" placeholder="Blood Group" />
        </div>
        <div className="flex">
          <p>Gender</p>
          <div>
            <input type="radio" name="gender" id="male" />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input type="radio" name="gender" id="female" />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input type="radio" name="gender" id="other" />
            <label htmlFor="other">Prefer not to say</label>
          </div>
        </div>
        <div>
          <label htmlFor="contact">Contact No *</label>
          <input type="tel" id="contact" placeholder="Contact No" required />
        </div>
        <div>
          <label htmlFor="alternative_contact">Alternative Contact No *</label>
          <input
            type="tel"
            id="alternative_contact"
            placeholder="Alternative Contact No"
            required
          />
        </div>
        <div>
          <label htmlFor="answer">আপনি কিভাবে করতে চান? *</label>
          <input
            type="text"
            id="answer"
            placeholder="আপনি কিভাবে করতে চান?"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </AdmitForm>
    </Section>
  );
};
export default AdmissionForm;
