<template>
<download-excel
    class   = "btn btn-default"
    :data   = "json_data"
    :fields = "json_fields"
    name    = "filename.xls">

    Download Excel (可以自定义自己想要的html)
    <!-- 参考：https://github.com/jecovier/vue-json-excel -->
</download-excel>
</template>

<script>
export default {
    data() {
    return {
      json_fields: {
        "Complete name": "name",    //常规字段
        Telephone: "phone.mobile", //支持嵌套属性
        "Telephone 2": {
          field: "phone.landline",
                    //自定义回调函数
          callback: value => {
            return `Landline Phone - ${value}`;
          }
        }
      },
      json_data: [
        {
          name: "Tony Peña",
          city: "New York",
          country: "United States",
          birthdate: "1978-03-15",
          phone: {
            mobile: "1-541-754-3010",
            landline: "(541) 754-3010"
          }
        },
        {
          name: "Thessaloniki",
          city: "Athens",
          country: "Greece",
          birthdate: "1987-11-23",
          phone: {
            mobile: "+1 855 275 5071",
            landline: "(2741) 2621-244"
          }
        }
      ],
      json_meta: [
        [
          {
            " key ": " charset ",
            " value ": " utf- 8 "
          }
        ]
      ]
    };
  }
}
</script>