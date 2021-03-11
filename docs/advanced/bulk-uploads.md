---
id: bulk-uploads
title: Bulk Uploads
---

#### Watch the Video - Bulk Uploads In Datadocks

***
<figure class="video-container">
  <iframe src="//www.youtube.com/embed/Sx_fXff-kXU" frameborder="0" allowfullscreen width="100%"></iframe>
</figure>


Bulk Uploads In Datadocks (6:14)
***

## About Bulk Uploads

Bulk uploads is a method to bring pre-formatted DataDocks templates into your DataDocks platform. These upload templates have three types:

1.	Appointments
2.	Purchase Orders
3.	Companies


## About .CSV Templates

### Downloading .CSV Templates

You may download the templates associated with appointments, purchase orders and companies by selecting the template you wish to download (In the example below, appointments is selected). You can then access the download by clicking the download button on the right side of the screen. The save file dialog box appears and you can save the template. 

![Main](/img/docs/advanced/bulk-uploads/main.jpg)

### The Appointment .CSV Template

The appointment .CSV template contains all of the fields that are included in your appointment dialog screen. This is an easy way for you to get large numbers of appointments into your DataDocks platform at one time. Once you fill out the fields in the template, all of these appointments will appear in your appointment view. The appointment .CSV Template contains the following appointment fields:

Internal ID - This is used if you want to bulk upload an appointment, then in the future edit the same appointment through bulk uploading. For example, if you have an appointment that you need to change the date in the future, you would use the same internal ID to modify it. Please note that these have to be unique for each appointment.

- Appointment Date (MM-DD-YYYY HH:MM:SS)
- Duration (HH:SS)
- Type - Inbound or Outbound
- Drop Trailer / Container - Yes or No
- Carrier Name or Number
- Shipping Number 
- Trailer Number
- BOL Number
- Driver Name
- Packing List Customer Name or Number
- Packing List Product Name or SKU
- Packing List Unit
- Packing List PO Number
- Packing List Quantity
- Packing List Weight

NOTE: Templates contain sample fields for ease of formatting. 

![Excel Appointments](/img/docs/advanced/bulk-uploads/excel-appointments.jpg)

### Uploading the Appointment .CSV Template

Once you have worked with your file and are ready to upload it, select the browse button. NOTE: You should ensure that the file type you intend to upload matches the type in the upload dialog box (ie. For an appointments upload, ensure appointments is selected. For a purchase order upload ensure purchase order is selected and for companies upload, ensure companies is selected). 

![Upload Appointments](/img/docs/advanced/bulk-uploads/upload-appts.jpg)

### The Purchase Orders .CSV Template

The purchase orders .CSV template contains all of the fields that are included in your purchase order dialog screen. This is an easy way for you to get large numbers of purchase orders into your DataDocks platform at one time. Once you fill out the fields in the template, all of these purchase orders will appear in your purchase order view. The purchase order.CSV Template contains the following purchase order Fields:  

PO Number Location
Type - Inbound or Outbound
Carrier Name or Number
Expected Start (YYYY-MM-DD HH:MM:SS)
Expected End (YYYY-MM-DD HH:MM:SS)
Packing List Customer Name or Number
Packing List Product Name or SKU
Packing List Unit
Packing List Quantity
Packing List Weight 

NOTE: Templates contain sample fields for ease of formatting. 

![Purchase Orders Excel](/img/docs/advanced/bulk-uploads/pos-excel.jpg)

### Uploading the Purchase Orders .CSV Template

Once you have worked with your file and are ready to upload it, select the browse button. NOTE: You should ensure that the file type you intend to upload matches the type in the upload dialog box (ie. For an appointments upload, ensure appointments is selected. For a purchase orders upload ensure purchase orders is selected and for companies upload, ensure companies is selected). 

![Upload Purchase Orders](/img/docs/advanced/bulk-uploads/upload-pos.jpg)

### The Companies .CSV Template

The companies .CSV template contains all of the fields that are included in your companies dialog screen. This is an easy way for you to get large numbers of companies into your DataDocks platform at one time. Once you fill out the fields in the template, all of these companies will appear in your companies view. The companies .CSV template contains the following companies fields:

Name
Company Number
Type - Customer or Carrier
Auto Approve Appointments - Yes or No
Notifications - Yes or No
Email
Phone
Street Address
Unit
City
Province / State
Country
Postal / Zip Code

NOTE: Templates contain sample fields for ease of formatting. 

![Companies Upload Excel](/img/docs/advanced/bulk-uploads/companies-excel.jpg)

### Uploading the Companies .CSV Template

Once you have worked with your file and are ready to upload it, select the browse button. NOTE: You should ensure that the file type you intend to upload matches the type in the upload dialog box (ie. For an appointments upload, ensure appointments is selected. For a purchase orders upload ensure purchase orders is selected and for companies upload, ensure companies is selected). 
 
![Upload Companies](/img/docs/advanced/bulk-uploads/upload-companies.jpg)

### Managing Upload Errors

![Upload Errors](/img/docs/advanced/bulk-uploads/upload-errors.jpg)

Upload errors occur when the DataDocks platform receives a syntax error on a field that prevents it from being added to the database. As an example, if the date format is YYYY-MM-DD HH:MM:SS and the received field syntax is Tuesday, December 20th, 2020. This will produce an error and need to be corrected. The templates provided for appointments, purchase orders and companies give an example of the syntax expected in the first line of the .CSV file. Use those examples to populate your templates for upload, you can copy and paste the fields or the entire row if you wish. 

 
