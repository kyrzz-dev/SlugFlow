import SlugFlow from "../lib/slugFlow";
import dummy from "../examples/config/dummy";
import { localClone } from "../lib/util/slugData";

const flow = SlugFlow.defineFlow("config-dummy.com", dummy);
const root = flow.root;

test("1 - data construction with empty config", () =>{
    const slug = root.slug("test1");

    if(!slug){
        throw new Error();
    }

    expect(slug.data.shared).toEqual(root.data.shared);
    expect(slug.data.local).not.toEqual(root.data.local);
})