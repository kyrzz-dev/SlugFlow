import SlugFlow from "../lib/slugFlow";
import dummy from "../examples/config/dummy";

const flow = SlugFlow.defineFlow("config-dummy.com", dummy);
const root = flow.root;

test("100 - data should be shared from the root, local should be empty", () =>{
    const slug = root.slug("100");

    const shared = slug.data.shared, sharedR = root.data.shared;
    expect(shared).toEqual(sharedR);

    const local = slug.data.local;
    expect(local).toEqual({});
})

test("101 - data should be overwritten, local should be empty", () =>{
    const slug = root.slug("101");

    const shared = slug.data.shared, sharedR = root.data.shared;
    expect(shared).not.toEqual(sharedR);

    const local = slug.data.local;
    expect(local).toEqual({});
})

test("102 - data should be shared, local should be overwritten", () =>{
    const slug = root.slug("102");

    const shared = slug.data.shared, sharedR = root.data.shared;
    expect(shared).toEqual(sharedR);

    const local = slug.data.local, localR = root.data.local;
    expect(local).not.toEqual(localR);
})

test("103 - data and local should be overwritten", () =>{
    const slug = root.slug("103");

    const shared = slug.data.shared, sharedR = root.data.shared;
    expect(shared).not.toEqual(sharedR);

    const local = slug.data.local, localR = root.data.local;
    expect(local).not.toEqual(localR);
})

test("104 - data should be combined, local should be overwritten", () =>{
    const slug = root.slug("104");

    const shared = slug.data.shared, sharedR = root.data.shared;
    expect(shared.layout).not.toEqual(sharedR.layout);
    expect(shared.access).toEqual(sharedR.access);
    expect(shared.meta).not.toEqual(sharedR.meta);

    const local = slug.data.local, localR = root.data.local;
    expect(local).not.toEqual(localR);
})