# MA Motors Phone Editing Guide

This website is set up so stock can be edited from an iPhone through Sanity Studio.

## What You Can Edit From Your Phone

- Add a new car
- Upload car photos from the camera roll
- Change price, mileage, year and registration
- Add engine size, fuel type, gearbox and body type
- Add highlights and features
- Mark a car as available, reserved or sold
- Choose whether a car appears on the homepage

## One-Time Setup

1. Go to https://www.sanity.io/manage
2. Create a project called `MA Motors`
3. Use dataset name `production`
4. Copy the Project ID
5. In Vercel, open the MA Motors project
6. Go to Settings, then Environment Variables
7. Add these variables for Production, Preview and Development:

```txt
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

8. In Sanity Manage, open the project
9. Go to Settings, then API settings
10. Add these CORS origins and allow credentials:

```txt
https://mamotorsltd.com
https://www.mamotorsltd.com
```

11. Redeploy the site in Vercel.

## Phone Workflow

1. Open Safari on iPhone
2. Go to `https://mamotorsltd.com/admin`
3. Tap `All Adverts`
4. Login to Sanity
5. Open `All Car Adverts`
6. Tap the create button to add a new advert, or tap an existing advert to edit it
7. Fill in the grouped tabs: Advert Basics, Photos, Vehicle Specs, Description and Publishing
8. Press `Publish`

## Editing And Deleting Adverts

- To edit an advert, open `All Car Adverts`, choose the car, make changes and press `Publish`.
- To mark a car sold, open the advert, go to `Publishing`, set `Advert status` to `Sold`, then press `Publish`.
- To delete an advert, open the advert and use the three-dot menu in Sanity, then choose `Delete`.
- To change the main photo, open `Photos` and drag the best image to the first position.

The website refreshes from the CMS automatically. If a change does not show instantly, wait around one minute and refresh the page.

## Local Commands Before Pushing

Run these in PowerShell inside the project folder:

```powershell
npm.cmd install
npm.cmd run build
```

Then push:

```powershell
& "C:\Program Files\Git\cmd\git.exe" add .
& "C:\Program Files\Git\cmd\git.exe" commit -m "Add mobile stock admin"
& "C:\Program Files\Git\cmd\git.exe" push origin main
```
