<script setup lang="ts">
 import { ref, watch } from 'vue';
 import  CodeMirror from 'vue-codemirror6';
 import { javascript } from '@codemirror/lang-javascript';
 import { html } from '@codemirror/lang-html';
 import { state } from '../stores/codeStore';

 const htmlCode = ref('');
 const fullHTMLCode = ref('');
 const previewEnabled = ref(true);
 const iframeHTML = ref('')
//const props = defineProps(['blocklyCode']);
//htmlCode.value = props.blocklyCode.value;

function stackblitz(evt: Event) {
  console.log("stackblitz");
}

function changeCode(newCode: string) {
  htmlCode.value = newCode;
  fullHTMLCode.value = renderHTML(newCode);
  iframeHTML.value = newCode;
  const scriptTaginHTML = bodyHasNonScriptTags(fullHTMLCode.value);
  if (!scriptTaginHTML) {
     iframeHTML.value = `<script>${newCode.replaceAll("\n","")}<\/script>`;
  } else {
    iframeHTML.value = newCode;
  }

}


watch(() => state.blocklyCode, (newCode) => {
  //console.log('Code store updated:', newCode);
  htmlCode.value = newCode;
  fullHTMLCode.value = renderHTML(newCode);
  iframeHTML.value = newCode;
  const scriptTaginHTML = bodyHasNonScriptTags(fullHTMLCode.value);
  if (!scriptTaginHTML) {
     iframeHTML.value = `<script>${newCode.replaceAll("\n","")}<\/script>`;
  } else {
    iframeHTML.value = newCode;
  }
  //console.log('Full HTML:', fullHTMLCode.value);
});

/*
const code = ref(
`const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]
`);
*/
const extensions = ref([javascript()]);
const htmlExtensions = ref([html()]);
const tabs = ref("blocklycode");
const isPreviewActive = ref(false);

 function startPreview() {
   isPreviewActive.value = true;
 }

 function extractJavascript(html: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const scripts = Array.from(doc.querySelectorAll('script'));
  return scripts.map(script => script.textContent || '').join('\n');
 }

 function renderHTML(fragment: string): string {
  let fragment_trimmed = fragment.trim();
  if (!fragment_trimmed.startsWith('<')) {
    fragment_trimmed = "<script>\n" + fragment_trimmed + "\n<\/script>";
  }
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Blockly Javascript</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width" />
</head>
<body>
${fragment_trimmed}
</body>
</html>`;
}

function bodyHasNonScriptTags(htmlString: string): boolean {
  try {
    // Create a DOM parser
    const parser = new DOMParser();

    // Parse the HTML string
    const doc = parser.parseFromString(htmlString, 'text/html');

    // Get the body element
    const body = doc.body;

    if (!body) return false;

    // Get all direct and indirect children of the body
    const allElements = body.getElementsByTagName('*');

    // Check if there's at least one element that is not a script
    for (let i = 0; i < allElements.length; i++) {
      if (allElements[i]?.tagName.toLowerCase() !== 'script') {
        return true;
      }
    }

    // Check if body has text content directly (not within any tag)
    const textNodes = Array.from(body.childNodes || [])
      .filter((node): node is Text =>
         node.nodeType === Node.TEXT_NODE &&
         typeof node.textContent &&
         typeof node.textContent === 'string')
      .some(node => node.textContent && node.textContent.trim().length > 0);

  if (textNodes) {
    return true;
  }
    // If we get here, the body either has no elements or only has script elements
    return false;
  } catch (error) {
    console.error('Error parsing HTML:', error);
    return false;
  }
}

</script>

<template>
 <div>
  <q-tabs
    v-model="tabs"
    dense
    align="left"
  >
  <q-tab
      name="blocklycode"
      label="Code"
    />
  <q-tab
      name="preview"
      label="Preview"
      :disable="!previewEnabled"
    />

    <q-tab
      name="fullhtml"
      label="FullHTML"
    />
    <q-btn class="q-mx-md" color="deep-orange" label="Edit Code" glossy icon="fa-solid fa-arrow-up-right-from-square" @click="stackblitz"></q-btn>
  </q-tabs>
</div>
  <q-tab-panels v-model="tabs">
    <q-tab-panel name="blocklycode">

      <code-mirror
        v-model="htmlCode"

        :extensions="extensions"
        basic
        wrap
      />
    </q-tab-panel>
    <q-tab-panel name="preview" class="q-pa-md">
      <!--<iframe style="visibility: hidden;width: 0; height: 0; border: 0; border: none; position: absolute;"></iframe>-->
      <div v-if="!isPreviewActive" class="flex flex-center items-center">
        <q-btn
        icon="play_arrow"
        color="primary"
        size="lg"
        @click="startPreview"
        aria-label="Start preview"
      />
      </div>
      <div v-else >
        <iframe
          class="full-width"
          :srcdoc="iframeHTML"
          style="height: 100vh"
        />
      </div>
    </q-tab-panel>
    <q-tab-panel
      class="full-width q-px-none q-py-md"
      name="fullhtml"
    >
      <code-mirror
        v-model="fullHTMLCode"
        disabled
        :extensions="htmlExtensions"
        basic
        wrap
      />
    </q-tab-panel>
  </q-tab-panels>
</template>
