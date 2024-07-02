import html from "../Assets/svg/skills/html.svg";
import photoshop from "../Assets/svg/skills/photoshop.svg";
import afterEffects from "../Assets/svg/skills/after-effects.svg";
import css from "../Assets/svg/skills/css.svg";
import angular from "../Assets/svg/skills/angular.svg";
import javascript from "../Assets/svg/skills/javascript.svg";
import nextJS from "../Assets/svg/skills/nextJS.svg";
import react from "../Assets/svg/skills/react.svg";
import typescript from "../Assets/svg/skills/typescript.svg";
import vue from "../Assets/svg/skills/vue.svg";
import bootstrap from "../Assets/svg/skills/bootstrap.svg";
import memsql from "../Assets/svg/skills/memsql.svg";
import mongoDB from "../Assets/svg/skills/mongoDB.svg";
import mysql from "../Assets/svg/skills/mysql.svg";
import postgresql from "../Assets/svg/skills/postgresql.svg";
import tailwind from "../Assets/svg/skills/tailwind.svg";
import vitejs from "../Assets/svg/skills/vitejs.svg";
import vuetifyjs from "../Assets/svg/skills/vuetifyjs.svg";
import c from "../Assets/svg/skills/c.svg";
import cplusplus from "../Assets/svg/skills/cplusplus.svg";
import csharp from "../Assets/svg/skills/csharp.svg";
import dart from "../Assets/svg/skills/dart.svg";
import go from "../Assets/svg/skills/go.svg";
import java from "../Assets/svg/skills/java.svg";
import julia from "../Assets/svg/skills/julia.svg";
import kotlin from "../Assets/svg/skills/kotlin.svg";
import matlab from "../Assets/svg/skills/matlab.svg";
import php from "../Assets/svg/skills/php.svg";
import python from "../Assets/svg/skills/python.svg";
import ruby from "../Assets/svg/skills/ruby.svg";
import swift from "../Assets/svg/skills/swift.svg";
import aws from "../Assets/svg/skills/aws.svg";
import deno from "../Assets/svg/skills/deno.svg";
import django from "../Assets/svg/skills/django.svg";
import firebase from "../Assets/svg/skills/firebase.svg";
import git from "../Assets/svg/skills/git.svg";
import graphql from "../Assets/svg/skills/graphql.svg";
import lightroom from "../Assets/svg/skills/lightroom.svg";
import materialui from "../Assets/svg/skills/materialui.svg";
import nginx from "../Assets/svg/skills/nginx.svg";
import numpy from "../Assets/svg/skills/numpy.svg";
import opencv from "../Assets/svg/skills/opencv.svg";
import premierepro from "../Assets/svg/skills/premierepro.svg";
import pytorch from "../Assets/svg/skills/pytorch.svg";
import wordpress from "../Assets/svg/skills/wordpress.svg";


import figma from "../Assets/svg/skills/figma.svg";
import flutter from "../Assets/svg/skills/flutter.svg";
import microsoftoffice from "../Assets/svg/skills/microsoftoffice.svg";

import nodejs from "../Assets/svg/skills/nodejs.svg";
import expressjs from "../Assets/svg/skills/expressjs.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "photoshop":
      return photoshop;
    case "after effects":
      return afterEffects;
    case "css":
      return css;
    case "angular":
      return angular;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "nodejs":
      return nodejs;
    case "expressjs":
      return expressjs;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "vue":
      return vue;
    case "bootstrap":
      return bootstrap;
    case "memsql":
      return memsql;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "vuetifyjs":
      return vuetifyjs;
    case "c":
      return c;
    case "c++":
      return cplusplus;
    case "c#":
      return csharp;
    case "dart":
      return dart;
    case "go":
      return go;
    case "java":
      return java;
    case "kotlin":
      return kotlin;
    case "julia":
      return julia;
    case "matlab":
      return matlab;
    case "php":
      return php;
    case "python":
      return python;
    case "ruby":
      return ruby;
    case "swift":
      return swift;
    case "aws":
      return aws;
    case "deno":
      return deno;
    case "django":
      return django;
    case "firebase":
      return firebase;
    case "git":
      return git;
    case "graphql":
      return graphql;
    case "lightroom":
      return lightroom;
    case "materialui":
      return materialui;
    case "nginx":
      return nginx;
    case "numpy":
      return numpy;
    case "opencv":
      return opencv;
    case "premiere pro":
      return premierepro;
    case "pytorch":
      return pytorch;
    case "wordpress":
      return wordpress;
    case "figma":
      return figma;
    case "flutter":
      return flutter;
    case "microsoft office":
      return microsoftoffice;
    default:
      break;
  }
};
