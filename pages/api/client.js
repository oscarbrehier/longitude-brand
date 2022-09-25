import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: '7mbpaot7',
    dataset: 'prod',
    useCdn: true
});