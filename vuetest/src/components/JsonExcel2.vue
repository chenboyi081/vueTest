<template>
    <div>
        <json-excel :data="dataForExcel"></json-excel>
    </div>
    <!-- 参考：https://github.com/jecovier/vue-json-excel -->
</template>
<script>
import JsonExcel from "@/components/JsonExcel";

export default {
  components: {
    JsonExcel
  },
  data: () => {
    return {
      dataForExcel: [
        { colA: "Hello", colB: "World" },
        {
          colA: "Multi-line",
          /* Multi-line value: */
          colB:
            "This is a long paragraph\nwith multiple lines\nthat should show in a single cell."
        },
        { colA: "Another", colB: "Regular cell" },
      ]
    };
  }
};
</script>