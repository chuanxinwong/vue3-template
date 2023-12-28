import { computed } from "vue";

/**
 * @param {Object} props 
 * @param {Object} attrs 
 * @param {Object} datas 
 * @param {Object} glpps 
 */
export default function (props, attrs = {}, datas = {}, glpps = {}) {


  var cmpDisabled = computed(() => {
    return glpps.gdisabled || props.disabled;
  })

  var cmpReadonly = computed(() => {
    return glpps.greadonly || props.readonly;
  })

  return { cmpDisabled, cmpReadonly }
}