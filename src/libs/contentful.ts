import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export const getEntryCowork = async () => {
  try {
    const response = await client.getEntries({
      content_type: "cowork",
    });

    // console.log(response.items);

    // console.log("testtt", response.items[0].fields.services);

    const company = response.items.map((company: any) => {
      return {
        jumbotitle: company.fields.jumbotitle,
        jumboimage: company.fields.jumboimage,
        jumbodesc: company.fields.jumbodesc,
        overviewtitle: company.fields.overviewtitle,
        overviewimage: company.fields.overviewimage,
        providetitle: company.fields.providetitle,
        provideimage: company.fields.provideimage,
        providedesc: company.fields.providedesc,
        services: company.fields.services,
        testimonals: company.fields.testimonals,
      };
    });
    return company[0];
  } catch (error) {
    console.log(error);
  }
};

export const getEntryFacilitiesCard = async () => {
  try {
    const responsefacilities = await client.getEntries({
      content_type: "facilities",
    });

    const facilities = responsefacilities.items.map((facilities: any) => {
      return {
        facilitiesimage: facilities.fields.facilitiesimage,
        facilitiesname: facilities.fields.facilitiesname,
      };
    });
    return facilities;
  } catch (error) {
    console.log(error);
  }
};
