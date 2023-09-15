{
  "properties" : { },
  "id" : "4e36ef979cda43e28dd19f5a73f04ecc",
  "script" : null,
  "groupId" : "e520f5044adf4947867e4a9e4d0ba8fd",
  "name" : "获取所有权限",
  "createTime" : null,
  "updateTime" : 1694819531836,
  "lock" : null,
  "createBy" : null,
  "updateBy" : null,
  "path" : "/permission",
  "method" : "GET",
  "parameters" : [ ],
  "options" : [ ],
  "requestBody" : "",
  "headers" : [ ],
  "paths" : [ ],
  "responseBody" : "{\n    \"status\": 0,\n    \"msg\": \"success\",\n    \"data\": [],\n    \"timestamp\": 1694818842873,\n    \"requestTime\": 1694818842849,\n    \"executeTime\": 24\n}",
  "description" : null,
  "requestBodyDefinition" : null,
  "responseBodyDefinition" : null
}
================================
return db.table('sys_permission').select()