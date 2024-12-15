import { defineFlow } from "../lib/slugFlow";
import dummy from "../examples/config/dummy";

const flow = defineFlow("config-dummy.com", dummy);
const root = flow.root;

test("100 - data should be shared from the root, local should be empty", () =>{
    const target = root.slug("100");

    const shared = target.data.shared, sharedR = root.data.shared;
    expect(shared).toEqual(sharedR);

    const local = target.data.local;
    expect(local).toEqual({});
})
test("101 - data should be overwritten, local should be empty", () =>{
    const target = root.slug("101");

    const shared = target.data.shared, sharedR = root.data.shared;
    expect(shared).not.toEqual(sharedR);

    const local = target.data.local;
    expect(local).toEqual({});
})
test("102 - data should be shared, local should be overwritten", () =>{
    const target = root.slug("102");

    const shared = target.data.shared, sharedR = root.data.shared;
    expect(shared).toEqual(sharedR);

    const local = target.data.local, localR = root.data.local;
    expect(local).not.toEqual(localR);
})
test("103 - data and local should be overwritten", () =>{
    const target = root.slug("103");

    const shared = target.data.shared, sharedR = root.data.shared;
    expect(shared).not.toEqual(sharedR);

    const local = target.data.local, localR = root.data.local;
    expect(local).not.toEqual(localR);
})
test("104 - data should be combined, local should be overwritten", () =>{
    const target = root.slug("104");

    const shared = target.data.shared, sharedR = root.data.shared;
    expect(shared.layout).not.toEqual(sharedR.layout);
    expect(shared.access).toEqual(sharedR.access);
    expect(shared.meta).not.toEqual(sharedR.meta);

    const local = target.data.local, localR = root.data.local;
    expect(local).not.toEqual(localR);
})

describe("200 - grandslugs should be obtained", () =>{
    const target = root.slug("200");

    test("A - From target", () =>{
        expect(target.slug("a").name).toEqual("a");
        expect(target.slug("b").name).toEqual("b");
        expect(target.slug("c").name).toEqual("c");
    });

    test("B - From root", () =>{
        expect(root.slug("200/a").name).toEqual("a");
        expect(root.slug("200/b").name).toEqual("b");
        expect(root.slug("200/c").name).toEqual("c");
    })
})

describe("201 - Access to deep slugs", () =>{
    const target = root.slug("201");

    test("A - stair structure", () =>{
        let obo = target;
        expect((obo = obo.slug("a")).name).toEqual("a");
        expect((obo = obo.slug("b")).name).toEqual("b");
        expect((obo = obo.slug("c")).name).toEqual("c");
    });

    test("B - hierarchical", () =>{
        expect(target.slug("a").name).toEqual("a");
        expect(target.slug("a/b").name).toEqual("b");
        expect(target.slug("a/b/c").name).toEqual("c");
    })

    test("C - targeting", () =>{
        const a = target.slug("a");
        const ab = target.slug("a/b");

        expect(root.slug("201/a/b/c").name).toEqual("c");
        expect(target.slug("a/b/c").name).toEqual("c");
        expect(a.slug("b/c").name).toEqual("c");
        expect(ab.slug("c").name).toEqual("c");
    })
})