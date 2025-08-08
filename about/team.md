---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/116349858?s=400&u=1d13f62ee48ab47065ecd7adb9a47de8034a15aa&v=4',
    name: '路修哲',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/dx2331lxz' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/69948489?v=4',
    name: '张世卿',
    title: 'leader',
    links: [
        { icon: 'github', link: 'https://github.com/woziji2200' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/99163721?v=4',
    name: '古宇恒',
    title: 'leader',
    links: [
        { icon: 'github', link: 'https://github.com/yaosanqi137' }
    ]
  }
]

const members = [
    {
        avatar: 'https://avatars.githubusercontent.com/u/116349858?s=400&u=1d13f62ee48ab47065ecd7adb9a47de8034a15aa&v=4',
        name: '路修哲',
        title: 'Creator',
        links: [
            { icon: 'github', link: 'https://github.com/dx2331lxz' }
        ]
    },
]

</script>

<VPTeamPage>
  <!-- <VPTeamPageTitle> -->
    <!-- <template #title>Our Team</template>
    <template #lead></template> -->
  <!-- </VPTeamPageTitle> -->
  <VPTeamPageSection>
    <template #title>Leaders</template>
    <template #lead>项目负责人</template>
    <template #members>
      <VPTeamMembers size="medium" :members="coreMembers" />
    </template>
  </VPTeamPageSection>
  
  <VPTeamPageSection>
    <template #title>Members</template>
    <template #lead>团队成员</template>
    <template #members>
      <VPTeamMembers size="small" :members="members" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>