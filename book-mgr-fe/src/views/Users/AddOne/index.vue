<template>
  <div>
    <a-modal
      title="添加一个用户"
      :visible="props.show"
      @ok="submit"
      @cancel="close"
    >

    <!-- 表单代码 在antdv网站上有提供 -->
    <a-form :label-col="{span:6}" :wrapper-col="{span:10}">
      <a-form-item label="账号">
        <a-input v-model:value="addForm.account"  />
      </a-form-item>
      <a-form-item  label="密码">
        <a-input v-model:value="addForm.password"  />
      </a-form-item>
    </a-form>
  </a-modal>
  </div>
</template>

<script src="./index.js"></script>