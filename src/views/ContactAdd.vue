<template>
  <div v-if="contact" class="page">
    <h4>Thêm Liên hệ</h4>
    <ContactForm :contact="contact" @submit:contact="submitContact" />
    <p>{{ message }}</p>
  </div>
</template>
<script>
import ContactForm from '@/components/ContactForm.vue';
import ContactService from '@/services/contact.service';
export default {
  components: {
    ContactForm,
  },
  data() {
    return {
      contact: {
        name: '',
        email: '',
        address: '',
        phone: '',
        favorite: false,
      },
    };
  },
  methods: {
    async submitContact() {
      try {
        // Sử dụng ContactService để gửi dữ liệu lên máy chủ
        const createdContact = await ContactService.create(this.contact);

        confirm('Liên hệ được tạo thành công');
        this.$router.push({name: 'contactbook'});

        // Đặt lại biểu mẫu sau khi đã gửi thành công
        this.contact = {
          name: '',
          email: '',
          address: '',
          phone: '',
          favorite: false,
        };
      } catch (error) {
        // Xử lý lỗi nếu có
        console.error('Lỗi khi tạo liên hệ:', error);
      }
    },
  },
};
</script>
