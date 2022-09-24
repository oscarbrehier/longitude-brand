import { createClient } from 'contentful';

const getServerSideProps = async () => {

    const client = createClient({
        space: "bnow6oaslhdm",
        accessToken: "_CHpepHikmVGz_HcsJP-FK5y2-5TBQCiC38DdmPWySs",
        host: "preview.contentful.com"
    });

    const getAuthors = async () => {
        try {
          const entries = await client.getEntries();
          return entries
        } catch (error) {
          console.log(`Error fetching authors ${error}`);
        }
      };
    return { getAuthors };

};

export default getServerSideProps;