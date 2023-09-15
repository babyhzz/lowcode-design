{
  "properties" : { },
  "id" : "copy1694818900930d90456",
  "script" : null,
  "groupId" : "e520f5044adf4947867e4a9e4d0ba8fd",
  "name" : "新增权限",
  "createTime" : null,
  "updateTime" : 1694819633004,
  "lock" : null,
  "createBy" : null,
  "updateBy" : null,
  "path" : "/insert",
  "method" : "POST",
  "parameters" : [ ],
  "options" : [ ],
  "requestBody" : "",
  "headers" : [ ],
  "paths" : [ ],
  "responseBody" : "{\n    \"status\": 0,\n    \"msg\": \"success\",\n    \"data\": [],\n    \"timestamp\": 1694818705487,\n    \"requestTime\": 1694818704941,\n    \"executeTime\": 546\n}",
  "description" : null,
  "requestBodyDefinition" : null,
  "responseBodyDefinition" : null
}
================================
return db.table('sys_permission').select()