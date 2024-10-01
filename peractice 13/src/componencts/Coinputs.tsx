import React, { useState } from "react";
import Input from "./Input";
import File from "./FileUpload";
import Checkbox from "./Checkbox";
import Btn from "./Btn";

export function Coinput() {
  interface FormData {
    companyName: string;
    natureOfBusiness: string;
    address: string;
    postcode: string;
    contactName: string;
    contactEmail: string;
    contactPhone: string;
    website: string;
    idea: string;
    file: File | undefined;
    dataProtectionConsent: boolean;
  }

  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    natureOfBusiness: "",
    address: "",
    postcode: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    website: "",
    idea: "",
    file: undefined,
    dataProtectionConsent: false,
  });

  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    
    if (name === "contactPhone" && !/^\d*$/.test(value)) {
      return; 
    }

    setFormData({ ...formData, [name]: value });

    // Check if all fields are valid
    const isValidForm = Object.values({ ...formData, [name]: value }).every(
      (value) => value !== ""
    );
    setIsValid(isValidForm);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setFormData({ ...formData, file: file || undefined });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setFormData({ ...formData, dataProtectionConsent: checked });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subData = {
      companyName: formData.companyName,
      natureOfBusiness: formData.natureOfBusiness,
      address: formData.address,
      postcode: formData.postcode,
      contactName: formData.contactName,
      contactEmail: formData.contactEmail,
      contactPhone: formData.contactPhone,
      website: formData.website,
      idea: formData.idea,
    };
    console.log(subData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full flex flex-col relative">
        <Input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleInputChange}
          validate={(value) => value.length > 0}
          errorMessage="Please enter a company name"
        />
        <Input
          type="text"
          name="natureOfBusiness"
          placeholder="Nature of Business"
          value={formData.natureOfBusiness}
          onChange={handleInputChange}
          validate={(value) => value.length > 0}
          errorMessage="Please enter a nature of business"
        />
        <div className="w-full flex flex-row gap-4">
          <Input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            validate={(value) => value.length > 0}
            errorMessage="Please enter an Address"
          />
          <div className="w-6/12">
            <Input
              type="text"
              name="postcode"
              placeholder="Postcode"
              value={formData.postcode}
              onChange={handleInputChange}
              validate={(value) => value.length > 0}
              errorMessage="Please enter a Postcode"
            />
          </div>
        </div>
        <Input
          type="text"
          name="contactName"
          placeholder="Contact Name"
          value={formData.contactName}
          onChange={handleInputChange}
          validate={(value) => value.length > 0}
          errorMessage="Please enter a name"
        />
        <Input
          type="phone"
          name="contactPhone"
          placeholder="Contact Phone"
          value={formData.contactPhone}
          onChange={handleInputChange}
          validate={(value) => /^\d+$/.test(value)} 
          errorMessage="Please enter a valid contact phone number"
        />
        <Input
          type="email"
          name="contactEmail"
          placeholder="email@email.com"
          value={formData.contactEmail}
          onChange={handleInputChange}
          validate={(value) =>
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
          }
          errorMessage="Please enter a valid email address"
        />
        <Input
          type="text"
          name="website"
          placeholder="Linkedin"
          value={formData.website}
          onChange={handleInputChange}
          validate={(value) => value.length > 0}
          errorMessage="Please enter a Linkedin URL"
        />
        <Input
          type="text"
          name="idea"
          placeholder="Let's Talk about your idea"
          value={formData.idea}
          onChange={handleInputChange}
          validate={(value) => value.length > 0}
          errorMessage="Please enter about your idea"
        />
        <File onChange={handleFileChange} />
        <Btn disabled={!isValid}>SUBMIT</Btn>
        <div className="top-[1340px] w-80 -ml-[150px] pb-20">
          <Checkbox
            checked={formData.dataProtectionConsent}
            onChange={handleCheckboxChange}
          />
        </div>
      </div>
    </form>
  );
}
