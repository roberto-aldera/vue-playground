<script setup lang="ts">
import TheNavbar from "./TheNavbar.vue";
import ContentItem from "./ContentItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <TheNavbar />
  <ContentItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Some Heading</template>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis
    iaculis porta. Nulla id massa risus. Mauris blandit posuere nunc vel
    facilisis. Donec ac interdum tellus. Aliquam eleifend nunc non tellus
    molestie dictum. Nulla ullamcorper urna nec condimentum eleifend. Curabitur
    fermentum fermentum mattis. Fusce vulputate ipsum vel lobortis iaculis.
    Curabitur est ante, pellentesque in laoreet eget, posuere eu justo. Aliquam
    iaculis est et mattis tincidunt. In eget leo nibh. Phasellus congue mattis
    porttitor. Sed a sapien pulvinar, sollicitudin urna eget, sagittis elit. Nam
    cursus sagittis lacinia. Praesent at rhoncus risus, nec consectetur nibh. Ut
    eu accumsan lacus. Ut luctus velit quis sapien laoreet imperdiet. Vivamus
    pulvinar id est vitae porta. Morbi consequat, arcu nec dignissim interdum,
    nunc leo commodo eros, nec placerat sem diam non magna. Mauris scelerisque
    est quis ante blandit, vel ultrices nulla ullamcorper. Nulla consectetur
    odio quis interdum ultricies. Nam tempus magna eu urna convallis, in posuere
    metus feugiat. Integer a velit dapibus massa suscipit egestas. Mauris
    fermentum est ut sem eleifend dignissim.
  </ContentItem>

  <ContentItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Another heading</template>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis
    iaculis porta. Nulla id massa risus. Mauris blandit posuere nunc vel
    facilisis. Donec ac interdum tellus. Aliquam eleifend nunc non tellus
    molestie dictum. Nulla ullamcorper urna nec condimentum eleifend. Curabitur
    fermentum fermentum mattis. Fusce vulputate ipsum vel lobortis iaculis.
    Curabitur est ante, pellentesque in laoreet eget, posuere eu justo. Aliquam
    iaculis est et mattis tincidunt. In eget leo nibh. Phasellus congue mattis
    porttitor. Sed a sapien pulvinar, sollicitudin urna eget, sagittis elit. Nam
    cursus sagittis lacinia. Praesent at rhoncus risus, nec consectetur nibh. Ut
    eu accumsan lacus. Ut luctus velit quis sapien laoreet imperdiet. Vivamus
    pulvinar id est vitae porta. Morbi consequat, arcu nec dignissim interdum,
    nunc leo commodo eros, nec placerat sem diam non magna. Mauris scelerisque
    est quis ante blandit, vel ultrices nulla ullamcorper.
  </ContentItem>
</template>
