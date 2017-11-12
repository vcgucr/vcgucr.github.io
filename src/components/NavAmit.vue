<template>
  <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li v-for="item in navItems" :key="item.name">
              <router-link :to="item.link">{{item.name}}</router-link>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Research Projects<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li v-for="pub in publications" :key="pub.name">
                  <router-link :to="pub.link">{{ pub.name }}</router-link>
                </li>
                <li><a href="http://vislab.ucr.edu/RESEARCH/Projects/VideoWeb/index.htm">VideoWeb: A Video Network Lab</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
export default {
  name: 'NavAmit',
  data: function() {
    return {
      navItems: [{
        name: 'Home',
        link: '/'
      },
      {
        name: 'Publications',
        link: '/publications'
      },
      {
        name: 'Datasets',
        link: '/datasets'
      },
      {
        name: 'People',
        link: '/people'
      }],
      publications: [
        {
          name: 'Human Robot Vision Network',
          link: '/HumanRobots'
        },
        {
          name: 'Wide Area Scene Analysis in Vision Network',
          link: '/WideArea'
        },
        {
          name: 'Activity Recognition and Prediction',
          link: '/ActivityRP'
        },
        {
          name: 'Situational Awareness Under Constraint Resources',
          link: '/SituationalAwareness'
        },
        {
          name: 'Face Tracking and Recognition',
          link: '/FaceTR'
        },
        {
          name: 'Biological Image Analysis',
          link: '/BiologicalIA'
        },
        {
          name: 'Multi-terminal Video Compression',
          link: '/MTVideo'
        }
      ]
    }
  }
}
</script>

