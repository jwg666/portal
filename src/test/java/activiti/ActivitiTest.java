package activiti;

//import java.io.File;
//import java.io.FileInputStream;
//import java.io.InputStream;
//import java.util.List;
//import java.util.zip.ZipInputStream;
//
//import javax.annotation.Resource;
//
//import org.activiti.engine.RepositoryService;
//import org.activiti.engine.repository.Deployment;
//import org.activiti.engine.repository.ProcessDefinition;
//import org.apache.commons.io.FilenameUtils;
//import org.junit.Test;


import base.BaseTestCase;
public class ActivitiTest extends BaseTestCase{
//	@Resource
//	private RepositoryService repositoryService;
//	@Test
//	public void testDeploy(){
//		try {
//			logger.debug("--------------------------------------------------");
//			String filePath = "E:\\all.bar";
//			File processFile = new File(filePath);
//		    InputStream fileInputStream = new FileInputStream(processFile);
//		      Deployment deployment = null;
//		      String extension = FilenameUtils.getExtension(processFile.getName());
//		      if (extension.equals("zip") || extension.equals("bar")) {
//		        ZipInputStream zip = new ZipInputStream(fileInputStream);
//		        deployment = repositoryService.createDeployment().addZipInputStream(zip).deploy();
//		      } else {
//		        deployment = repositoryService.createDeployment().addInputStream(processFile.getName(), fileInputStream).deploy();
//		      }
//		      List<ProcessDefinition> list = repositoryService.createProcessDefinitionQuery().deploymentId(deployment.getId()).list();
//		      for (ProcessDefinition processDefinition : list) {
//				logger.debug("布署的流程:"+processDefinition.getName());
//			}
//		} catch (Exception e) {
//			logger.error("布署流程出现问题",e);
//			e.printStackTrace();
//		}
//
//
//	}
}
