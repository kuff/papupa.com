const fetcher = require('../fetcher.js');

it('Fetches GitHub Activity', async done => {

    const activity = await fetcher.getGitHubActivity();
    console.log(activity);

    expect(activity.repo).not.toEqual(undefined);
    expect(activity.timestamp).not.toEqual(undefined);

    done();

});