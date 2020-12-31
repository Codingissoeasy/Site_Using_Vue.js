<template>
    <div>

        <NavPart />
        <h1>This is Language Pages</h1>
        <FooterPart />
        
    </div>
</template>

<script>
import NavPart from "@/components/_NavPart";
import FooterPart from "@/components/_FooterPart";

export default {
  name: 'Lang',
  components: {
    NavPart,
    FooterPart
  }
};
</script>
