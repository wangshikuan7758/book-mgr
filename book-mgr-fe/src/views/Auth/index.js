import { defineComponent, ref } from 'vue';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons-vue';
export default defineComponent({
    // 组件要注册后才能使用(Ant里面的)
    components: {
        UserOutlined,
        LockOutlined,
        MailOutlined,
    },
    setup() {

    },
});