#version 460


in vec3 colorOut;
in vec3 vertexOut;
in vec2 textureOut;

out vec4 fragColor;
uniform sampler2D textureImage;


void main()
{
		fragColor = texture(textureImage, textureOut); 
}